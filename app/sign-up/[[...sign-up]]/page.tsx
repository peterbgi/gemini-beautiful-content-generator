import { SignUp } from '@clerk/nextjs'

export default function SignUpPage() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-black">
      <SignUp
      appearance={{
        elements: {
          formButtonPrimary:
          "bg-red-800 hover:bg-red-700 text-sm normal-case"
        }
      }}
       />
    </div>
  )
}