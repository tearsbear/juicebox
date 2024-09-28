import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface AlertDialogProps {
  isOpen: boolean;
  onClose: () => void;
  link?: string;
  variant?: "default" | "success";
  title?: string;
  message?: string;
}

const AlertDialog: React.FC<AlertDialogProps> = ({
  isOpen,
  onClose,
  link,
  variant = "default",
  title,
  message,
}) => {
  const router = useRouter();

  if (!isOpen) return null;

  const isSuccess = variant === "success";

  const handleSuccessClose = () => {
    onClose();
    router.push("/");
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-gray-800 p-6 rounded-lg max-w-sm w-full mx-4">
        {isSuccess && (
          <div className="flex justify-center mb-4">
            <Image
              src="/images/icons/check.svg"
              alt="Success"
              width={50}
              height={50}
            />
          </div>
        )}
        <h2 className="text-xl font-bold mb-4 text-center">
          {title || (isSuccess ? "Success!" : "Are you sure?")}
        </h2>
        <p className="mb-6 text-center">
          {message ||
            (isSuccess
              ? "Your action was completed successfully."
              : "Do you want to go back to the previous page? Your progress will be lost.")}
        </p>
        <div
          className={`flex ${
            isSuccess ? "justify-center" : "justify-end"
          } space-x-4`}
        >
          {!isSuccess && (
            <button
              className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
              onClick={onClose}
            >
              Cancel
            </button>
          )}
          {link ? (
            <Link href={link} className={isSuccess ? "w-full" : ""}>
              <button
                className={`px-4 py-2 ${
                  isSuccess
                    ? "bg-green-600 hover:bg-green-700 w-full"
                    : "bg-red-600 hover:bg-red-700"
                } text-white rounded`}
              >
                {isSuccess ? "Continue" : "Go Back"}
              </button>
            </Link>
          ) : (
            <button
              className={`px-4 py-2 ${
                isSuccess
                  ? "bg-green-600 hover:bg-green-700 w-full"
                  : "bg-red-600 hover:bg-red-700"
              } text-white rounded`}
              onClick={isSuccess ? handleSuccessClose : onClose}
            >
              {isSuccess ? "Close" : "Confirm"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default AlertDialog;
