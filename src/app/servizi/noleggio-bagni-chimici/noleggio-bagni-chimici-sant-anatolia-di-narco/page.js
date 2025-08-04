import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Sant'Anatolia di Narco",
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Sant'Anatolia di Narco", 
  locationNames: {label: "Sant'Anatolia di Narco", href: "sant-anatolia-di-narco"} 
});
