// ===============================
// Fade Up Animation
// ===============================

export const fadeUp = {
    hidden: {
        opacity: 0,
        y: 60,
    },

    visible: {
        opacity: 1,
        y: 0,

        transition: {
            duration: 0.8,
            ease: "easeOut",
        },
    },
};

// ===============================
// Fade Left Animation
// ===============================

export const fadeLeft = {
    hidden: {
        opacity: 0,
        x: -80,
    },

    visible: {
        opacity: 1,
        x: 0,

        transition: {
            duration: 0.8,
            ease: "easeOut",
        },
    },
};

// ===============================
// Fade Right Animation
// ===============================

export const fadeRight = {
    hidden: {
        opacity: 0,
        x: 80,
    },

    visible: {
        opacity: 1,
        x: 0,

        transition: {
            duration: 0.8,
            ease: "easeOut",
        },
    },
};

// ===============================
// Zoom In Animation
// ===============================

export const zoomIn = {
    hidden: {
        opacity: 0,
        scale: 0.8,
    },

    visible: {
        opacity: 1,
        scale: 1,

        transition: {
            duration: 0.7,
            ease: "easeOut",
        },
    },
};

// ===============================
// Stagger Container
// ===============================

export const staggerContainer = {
    hidden: {},

    visible: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};

// ===============================
// Floating Animation
// ===============================

export const floating = {
    animate: {
        y: [0, -12, 0],

        transition: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
        },
    },
};

// ===============================
// Rotate Animation
// ===============================

export const rotateAnimation = {
    animate: {
        rotate: 360,

        transition: {
            duration: 12,
            repeat: Infinity,
            ease: "linear",
        },
    },
};

// ===============================
// Button Hover Animation
// ===============================

export const buttonHover = {
    whileHover: {
        scale: 1.08,

        transition: {
            duration: 0.25,
        },
    },

    whileTap: {
        scale: 0.96,
    },
};

// ===============================
// Card Hover Animation
// ===============================

export const cardHover = {
    whileHover: {
        y: -10,
        scale: 1.02,

        transition: {
            duration: 0.3,
        },
    },
};