import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Castel Viscardo",
    canonical: links.autospurgo["castel-viscardo"],
});
export default withBaseProps({ 
    title: "Autospurgo Castel Viscardo", 
    locationNames: {label: "Castel Viscardo", href: "castel-viscardo"},
    locationsData: getProvinceLocationsData({
        links: links.autospurgo,
        comuni: comuni["terni"],
        name: "Terni",
    }),
});
