import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Belluno",
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Belluno", 
    locationNames: {label: "Belluno", href: "belluno"}  
});