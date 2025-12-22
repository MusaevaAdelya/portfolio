import { useState } from "react"
import InputField from "../components/InputField"
import { FaArrowRight, FaEnvelope } from "react-icons/fa6"
import { PlacedFlower } from "../components/PlacedFlower"
import { FlowerLightRedOutlinedBeige } from "../components/Flower"
import emailjs from '@emailjs/browser'

function Contacts() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        setSubmitStatus('idle')

        try {

            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                {
                    name: formData.name,
                    email: formData.email,
                    message: formData.message
                },
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            )

            setSubmitStatus('success')
            setFormData({ name: '', email: '', message: '' })
        } catch (error) {
            console.error('Email send error:', error)
            setSubmitStatus('error')
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <section id="contacts" className="bg-accent relative rounded-2xl lg:rounded-[50px] overflow-hidden border-dashed border-2 border-dark-500 pt-5 lg:pt-10 px-5 lg:px-30 pb-8 lg:pb-15 md:mb-5 mb-0 lg:mb-10">
            <PlacedFlower top="10%" left="7%" size={80}>
                <FlowerLightRedOutlinedBeige style={{ width: "100%", height: "100%" }} />
            </PlacedFlower>
            <PlacedFlower top="6%" left="65%" size={50}>
                <FlowerLightRedOutlinedBeige style={{ width: "100%", height: "100%" }} />
            </PlacedFlower>
            <PlacedFlower top="12%" left="90%" size={150}>
                <FlowerLightRedOutlinedBeige style={{ width: "100%", height: "100%" }} />
            </PlacedFlower>
            <PlacedFlower top="50%" left="95%" size={50}>
                <FlowerLightRedOutlinedBeige style={{ width: "100%", height: "100%" }} />
            </PlacedFlower>
            <PlacedFlower top="80%" left="90%" size={80}>
                <FlowerLightRedOutlinedBeige style={{ width: "100%", height: "100%" }} />
            </PlacedFlower>
            <PlacedFlower top="75%" left="10%" size={150}>
                <FlowerLightRedOutlinedBeige style={{ width: "100%", height: "100%" }} />
            </PlacedFlower>
            <div className="z-10 relative">
                <h2 className="uppercase font-bold text-3xl lg:text-5xl mb-4 text-center text-light-350" data-aos="fade-up">get in touch</h2>
                <form onSubmit={handleSubmit} className="max-w-[815px] mx-auto" data-aos="fade-up" data-aos-delay="100">
                    <div className="flex gap-2 lg:gap-6 mb-3 lg:mb-6 lg:flex-row flex-col">
                        <InputField
                            title="Name"
                            placeholder="Name"
                            value={formData.name}
                            onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                            required
                        />
                        <InputField
                            title="Email Address"
                            placeholder="Email Address"
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                            required
                        />
                    </div>
                    <InputField
                        textArea={true}
                        title="Content"
                        placeholder="Your message..."
                        value={formData.message}
                        onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                        required
                    />
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="flex items-center justify-center bg-secondary w-full text-black rounded-sm lg:rounded-lg p-2 lg:p-4 text-lg lg:text-2xl font-bold my-5 lg:my-10 hover:bg-secondary-100 hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isSubmitting ? 'Sending...' : 'Send Email'} <FaArrowRight className="ml-2" />
                    </button>
                    {submitStatus === 'success' && (
                        <p className="text-light-100 text-center mb-3">Message sent successfully! ✓</p>
                    )}
                    {submitStatus === 'error' && (
                        <p className="text-light-100 text-center mb-3">Failed to send message. Please try again.</p>
                    )}
                    <p className="bg-linear-to-r from-accent via-light-350 to-accent min-h-0.5" />
                    <div className="mt-5 lg:mt-10 text-light-100 bg-accent-bright border border-light-500 rounded-lg py-2 lg:py-5 px-3 lg:px-8 flex items-center gap-4 text-lg lg:text-2xl hover:scale-105 transition-transform duration-300">
                        <FaEnvelope /> Email: adellyamsv@gmail.com
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contacts