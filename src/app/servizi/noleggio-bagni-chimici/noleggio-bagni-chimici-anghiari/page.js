import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Anghiari",
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Anghiari", 
  locationNames: {label: "Anghiari", href: "anghiari"} 
});
