import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto acqua Subbiano",
});
export default withBaseProps({ 
    title: "Trasporto acqua Subbiano", 
    locationNames: {label: "Subbiano", href: "subbiano"}  
});