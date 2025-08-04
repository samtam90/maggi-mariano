import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Cuneo",
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Cuneo", 
    locationNames: {label: "Cuneo", href: "cuneo"}  
});