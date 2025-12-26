import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }}
        className="w-full max-w-lg text-center"
      >
        <div className="mb-8">
          <span className="text-[120px] md:text-[180px] font-bold leading-none bg-gradient-to-b from-stone-600 to-stone-800 bg-clip-text text-transparent">404</span>
        </div>
        <h1 className="text-2xl font-semibold text-stone-100 mb-4">Page not found</h1>
        <p className="text-stone-400 mb-8 leading-relaxed">
          The page you're looking for doesn't exist or has been moved. Let's get you back on track.
        </p>
        <Button asChild className="bg-amber-500 text-stone-950 hover:bg-amber-400 font-medium px-6">
          <Link to="/">
            <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            Back home
          </Link>
        </Button>
      </motion.div>
    </div>
  );
};

export default NotFound;
