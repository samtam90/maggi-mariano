import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Giano dell'Umbria",
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Giano dell'Umbria", 
  locationNames: {label: "Giano dell'Umbria", href: "giano-dell-umbria"} 
});
