import { FcGoogle  } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";



export default function SocialLogin() {
  return (
    <div className="mt-8">

      {/* Divider */}

      <div className="relative">

        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-slate-200" />
        </div>

        <div className="relative flex justify-center">
          <span className="bg-white px-4 text-sm text-slate-500">
            Or continue with
          </span>
        </div>

      </div>

      {/* Social Buttons */}

      <div className="mt-6 grid grid-cols-2 gap-4">

        <button
          type="button"
          className="flex h-12 items-center justify-center gap-3 rounded-xl border border-slate-300 bg-white font-medium text-slate-700 transition-all duration-300 hover:border-orange-500 hover:bg-orange-50"
        >
          <FcGoogle size={20} />
          Google
        </button>

        <button
          type="button"
          className="flex h-12 items-center justify-center gap-3 rounded-xl border border-slate-300 bg-white font-medium text-slate-700 transition-all duration-300 hover:border-orange-500 hover:bg-orange-50"
        >
          <FaGithub size={20} />
          GitHub
        </button>

      </div>

    </div>
  );
}