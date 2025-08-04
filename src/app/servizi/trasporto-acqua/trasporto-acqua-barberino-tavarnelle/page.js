import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto acqua Barberino Tavarnelle",
});
export default withBaseProps({ 
    title: "Trasporto acqua Barberino Tavarnelle", 
    locationNames: {label: "Barberino Tavarnelle", href: "barberino-tavarnelle"}  
});