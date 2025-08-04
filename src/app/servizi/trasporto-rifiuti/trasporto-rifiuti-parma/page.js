import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Parma",
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Parma", 
    locationNames: {label: "Parma", href: "parma"}  
});