import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Subbiano",
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Subbiano", 
  locationNames: {label: "Subbiano", href: "subbiano"} 
});
