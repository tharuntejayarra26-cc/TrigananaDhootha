import React from "react";
import { useNavigate } from "react-router-dom";

const Media: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="flex justify-center gap-6 mt-10 py-4 px-4 bg-mystic/5">
            <button
                onClick={() => navigate("/photos")}
                className="px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
            >
                📸 Photos
            </button>

            <button
                onClick={() => navigate("/videos")}
                className="px-6 py-3 rounded-lg bg-purple-600 text-white font-medium hover:bg-purple-700 transition"
            >
                🎥 Videos
            </button>
        </div>
    );
};

export default Media;
