import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici L'Aquila",
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici L'Aquila", 
  locationNames: {label: "L'Aquila", href: "l-aquila"} 
});
