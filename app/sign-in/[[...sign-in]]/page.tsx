import { SignIn } from '@clerk/nextjs'

export default function SignInPage() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-black">
        <SignIn
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