import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Deruta",
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Deruta", 
  locationNames: {label: "Deruta", href: "deruta"} 
});
