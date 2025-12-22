type InputFieldProps = {
    textArea?: boolean
    title: string
    placeholder: string
    value?: string
    onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
    type?: string
    required?: boolean
}

const baseFieldStyles = "outline-amber-300 py-1 lg:py-4 px-3 lg:px-6 text-lg lg:text-2xl rounded-sm lg:rounded-xl w-full bg-light-600 text-accent placeholder-accent focus:outline-accent transition-all duration-300"
const inputFieldStyles = baseFieldStyles + " block "
const textAreaStyles = baseFieldStyles + " min-h-[174px] resize-y"

function InputField({ textArea = false, title, placeholder, value, onChange, type = "text", required = false }: InputFieldProps) {
    return (
        <div className="w-full">
            <p className="text-lg lg:text-2xl mb-1 lg:mb-3 text-light-350">{title}</p>
            {textArea ? (
                <textarea 
                    placeholder={placeholder} 
                    className={textAreaStyles}
                    value={value}
                    onChange={onChange}
                    required={required}
                />
            ) : (
                <input 
                    type={type} 
                    placeholder={placeholder} 
                    className={inputFieldStyles}
                    value={value}
                    onChange={onChange}
                    required={required}
                />
            )}
        </div>
    )
}

export default InputField