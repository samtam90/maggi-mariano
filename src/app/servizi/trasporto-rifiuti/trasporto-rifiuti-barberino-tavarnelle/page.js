import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Barberino Tavarnelle",
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Barberino Tavarnelle", 
    locationNames: {label: "Barberino Tavarnelle", href: "barberino-tavarnelle"}  
});