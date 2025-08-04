import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Barberino di Mugello",
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Barberino di Mugello", 
    locationNames: {label: "Barberino di Mugello", href: "barberino-di-mugello"}  
});