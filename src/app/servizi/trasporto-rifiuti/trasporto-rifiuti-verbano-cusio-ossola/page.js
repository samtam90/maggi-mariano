import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Verbano-Cusio-Ossola",
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Verbano-Cusio-Ossola", 
    locationNames: {label: "Verbano-Cusio-Ossola", href: "verbano-cusio-ossola"}  
});