import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Valtopina",
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Valtopina", 
  locationNames: {label: "Valtopina", href: "valtopina"} 
});
