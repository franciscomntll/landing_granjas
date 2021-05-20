import { useEffect, useRef } from "react"

const Paypal = () => {
    const paypalRef = useRef()

    useEffect(() => {
        window.paypal.Buttons({
            createOrder: (data, actions) => {
                return actions.order.create({
                  intent: "CAPTURE",
                  purchase_units: [
                    {
                      description: "Your description",
                      amount: {
                        currency_code: "INR",
                        value: 500.0,
                      },
                    },
                  ],
                });
              },
              onApprove: async (data, actions) => {
                const order = await actions.order.capture();
                setPaid(true);
                console.log(order);
              },
              onError: (err) => {
                //   setError(err),
                  console.error(err);
                },
        }).render(paypalRef.current) 
    }, [])

    return (
        <div>
            <div ref={paypalRef}></div>
        </div>
    )
}

export default Paypal
