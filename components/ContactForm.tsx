"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: wire up email backend (Resend / Nodemailer)
    console.log("Transmission queued:", form);
  }

  return (
    <div className="lg:hidden p-6 font-mono text-sm">
      <div className="mb-4">
        <span className="text-[#28ff1d]">C:\Users\Daniel&gt;</span>
        <span className="text-[#e5e2e1]"> run send_message.sh</span>
      </div>
      <div className="mb-6">
        <p className="text-[#b9cac9] mb-1">
          [SYSTEM]: Opening communication channel...
        </p>
        <p className="text-[#b9cac9]">
          [SYSTEM]: Recipient verified: D_CAMP_DEV
        </p>
      </div>
      <form className="space-y-6" onSubmit={handleSubmit}>
        {(
          [
            { id: "name", placeholder: "NAME_", type: "text" },
            { id: "email", placeholder: "EMAIL_", type: "email" },
          ] as const
        ).map(({ id, placeholder, type }) => (
          <div key={id} className="relative group">
            <div className="absolute left-0 top-0 w-0.5 h-full bg-[#00dddd] scale-y-0 group-focus-within:scale-y-100 transition-transform" />
            <input
              name={id}
              type={type}
              placeholder={placeholder}
              value={form[id]}
              onChange={handleChange}
              className="w-full bg-transparent border-none outline-none placeholder:text-[#3a4a49] text-sm uppercase px-4 py-2 text-[#e5e2e1]"
            />
          </div>
        ))}
        <div className="relative group">
          <div className="absolute left-0 top-0 w-0.5 h-full bg-[#00dddd] scale-y-0 group-focus-within:scale-y-100 transition-transform" />
          <textarea
            name="message"
            placeholder="MESSAGE_DATA..."
            rows={3}
            value={form.message}
            onChange={handleChange}
            className="w-full bg-transparent border-none outline-none placeholder:text-[#3a4a49] text-sm uppercase px-4 py-2 resize-none text-[#e5e2e1]"
          />
        </div>
        <button
          type="submit"
          className="mt-4 border border-[#00dddd]/50 text-[#00dddd] px-6 py-2 text-xs uppercase tracking-widest hover:bg-[#00dddd] hover:text-[#002020] transition-all w-full flex items-center justify-center gap-2"
        >
          <span className="material-symbols-outlined text-sm">send</span>
          EXECUTE_SEND
        </button>
      </form>
    </div>
  );
}
