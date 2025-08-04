import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Scheggia e Pascelupo",
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Scheggia e Pascelupo", 
  locationNames: {label: "Scheggia e Pascelupo", href: "scheggia-e-pascelupo"} 
});
