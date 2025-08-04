import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Caltanissetta",
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Caltanissetta", 
  locationNames: {label: "Caltanissetta", href: "caltanissetta"} 
});
