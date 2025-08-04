import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Castiglione del Lago",
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Castiglione del Lago", 
  locationNames: {label: "Castiglione del Lago", href: "castiglione-del-lago"} 
});
