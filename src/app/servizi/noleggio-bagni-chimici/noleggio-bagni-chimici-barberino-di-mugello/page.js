import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Barberino di Mugello",
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Barberino di Mugello", 
  locationNames: {label: "Barberino di Mugello", href: "barberino-di-mugello"} 
});
