import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto acqua Passignano sul Trasimeno",
});
export default withBaseProps({ 
    title: "Trasporto acqua Passignano sul Trasimeno", 
    locationNames: {label: "Passignano sul Trasimeno", href: "passignano-sul-trasimeno"}  
});