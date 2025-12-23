import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const contactFormSchema = z.object({
  name: z.string()
    .nonempty("Name is required")
    .min(3, "Name must be atleast 3 character long"),
    email: z.string()
    .nonempty("Email is required")
    .email("Invalid email format"),
    message: z.string()
    .nonempty("Message is required")
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState({success: false, message: ""});
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  });

  const sendEmail = async (data: ContactFormValues) => {
    setLoading(true);
    setResponse({success:false, message: ""});

    try {  
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if(!response.ok) {
        const res = await response.json();
        throw new Error(res.message || "Unable to send message");
      } 
      
      setResponse({success:true, message: "Message sent."});
      reset();
    } catch (error) {
      setResponse({success: false, message: error instanceof Error ? error.message : "Unable to send message."});
    } finally {
      setLoading(false);
      setTimeout(() => {
        setResponse({success: false, message: ""});
      }, 4000);
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit(sendEmail)}>
      <div>
        <label htmlFor="name" className="pl-2 pb-1 block text-input-label">Name</label>
        <input
            {...register("name")}
            id="name"
            type="text"
            className="w-full px-4 py-3 bg-input text-input-foreground rounded-2xl focus:outline-none focus:ring-1 focus:ring-ring"
            placeholder="Your name"
        />
        {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="pl-2 pb-1 block text-input-label">Email</label>
        <input
            {...register("email")}
            id="email"
            type="email"
            className="w-full px-4 py-3 bg-input text-input-foreground rounded-2xl focus:outline-none focus:ring-1 focus:ring-ring"
            placeholder="your@email.com"
        />
        {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="pl-2 pb-1 block text-input-label">Message</label>
        <textarea
            {...register("message")}
            id="message"
            rows={4}
            className="w-full px-4 py-3 bg-input text-input-foreground rounded-2xl focus:outline-none focus:ring-1 focus:ring-ring"
            placeholder="Your message"
        />
        {errors.message && (
            <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
        )}
      </div>

      <div>
        {response.message && (
          <p className={`pb-1 pl-2 font-medium ${response.success? "text-green-500": "text-red-500"}`}>{response.message}</p>
        )}

        <button
          type="submit"
          disabled={loading || Object.keys(errors).length > 0}
          className="px-8 py-3 rounded-2xl bg-gradient-to-r from-gradient-accent-start to-gradient-accent-end text-primary-foreground hover:opacity-90 disabled:opacity-50 transition-opacity cursor-pointer"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </div>
    </form>
  )
}
