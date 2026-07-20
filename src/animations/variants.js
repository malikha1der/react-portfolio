// ===============================
// Optimized Variants (Performance Focused)
// ===============================

// Fade Up Animation
export const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }, // Smoother easing
    },
};

// Fade Left Animation
export const fadeLeft = {
    hidden: { opacity: 0, x: -30 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
};

// Fade Right Animation
export const fadeRight = {
    hidden: { opacity: 0, x: 30 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
};

// Zoom In Animation
export const zoomIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5, ease: "easeOut" },
    },
};

// Stagger Container
export const staggerContainer = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.1 }, // Fast stagger
    },
};

// Floating Animation (Optimized for GPU)
export const floating = {
    animate: {
        y: [0, -15, 0],
        transition: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
        },
    },
};

// Rotate Animation
export const rotateAnimation = {
    animate: {
        rotate: 360,
        transition: {
            duration: 20, // Slower rotation is less jarring
            repeat: Infinity,
            ease: "linear",
        },
    },
};

// Button Hover Animation
export const buttonHover = {
    whileHover: {
        scale: 1.05, // Slight reduction for better feel
        transition: { duration: 0.2 },
    },
    whileTap: { scale: 0.95 },
};

// Card Hover Animation
export const cardHover = {
    whileHover: {
        y: -5, // Reduced distance
        scale: 1.01,
        transition: { duration: 0.2, ease: "easeOut" },
    },
};
