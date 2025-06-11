import React from "react";

const steps = ["장바구니", "주문/결제", "완료"];

const StepBar = ({ step = 1 }) => (
    <div className="w-full flex justify-center items-center py-4 bg-white shadow-xl">
        <div className="flex gap-4 text-base font-bold tracking-wide">
            {steps.map((label, idx) => {
                const current = idx + 1 === step;
                const done = idx + 1 < step;
                return (
                    <React.Fragment key={label}>
                        <span
                            className={
                                current
                                    ? "text-blue-900 border-b-2 border-blue-700 pb-1"
                                    : done
                                        ? "text-blue-700"
                                        : "text-gray-400"
                            }
                        >
                            {label}
                        </span>
                        {idx < steps.length - 1 && (
                            <span className="text-gray-400">→</span>
                        )}
                    </React.Fragment>
                );
            })}
        </div>
    </div>
);

export default StepBar;