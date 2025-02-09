"use client"
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";

const CheckoutFlow = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    billingAddress: "",
    shippingAddress: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const handleChange = (e:React.ChangeEvent<HTMLInputElement> ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  return (
    <Card className="max-w-lg mx-auto p-6 shadow-lg rounded-2xl">
      <CardContent>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          {step === 1 && (
            <div>
              <h2 className="text-xl font-bold mb-4">Billing & Shipping Address</h2>
              <Input
                name="billingAddress"
                placeholder="Billing Address"
                value={formData.billingAddress}
                onChange={handleChange}
                className="mb-3"
              />
              <Input
                name="shippingAddress"
                placeholder="Shipping Address"
                value={formData.shippingAddress}
                onChange={handleChange}
                className="mb-3"
              />
              <Button onClick={nextStep}>Next</Button>
            </div>
          )}

          {step === 2 && (
            <div>
              <h2 className="text-xl font-bold mb-4">Payment Details</h2>
              <Input
                name="cardNumber"
                placeholder="Card Number"
                value={formData.cardNumber}
                onChange={handleChange}
                className="mb-3"
              />
              <Input
                name="expiry"
                placeholder="Expiry Date (MM/YY)"
                value={formData.expiry}
                onChange={handleChange}
                className="mb-3"
              />
              <Input
                name="cvv"
                placeholder="CVV"
                value={formData.cvv}
                onChange={handleChange}
                className="mb-3"
              />
              <div className="flex justify-between">
                <Button onClick={prevStep} variant="outline">Back</Button>
                <Button onClick={nextStep}>Review</Button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <h2 className="text-xl font-bold mb-4">Review & Confirm</h2>
              <p><strong>Billing Address:</strong> {formData.billingAddress}</p>
              <p><strong>Shipping Address:</strong> {formData.shippingAddress}</p>
              <p><strong>Card Number:</strong> **** **** **** {formData.cardNumber.slice(-4)}</p>
              <div className="flex justify-between mt-4">
                <Button onClick={prevStep} variant="outline">Back</Button>
                <Button onClick={() => alert("Order Placed!")}>Confirm</Button>
              </div>
            </div>
          )}
        </motion.div>
      </CardContent>
    </Card>
  );
};

export default CheckoutFlow;
