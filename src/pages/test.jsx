import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Collapse() {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-96 mx-auto mt-10">
      <button
        onClick={() => setOpen(!open)}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Toggle
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="overflow-hidden bg-gray-100 mt-2"
          >
            <div className="p-4">
              This content collapses smoothly with Framer Motion.
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
