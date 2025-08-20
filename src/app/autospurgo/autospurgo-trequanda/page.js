import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Trequanda",
    canonical: links.autospurgo["trequanda"],
});
export default withBaseProps({ 
    title: "Autospurgo Trequanda", 
    locationNames: {label: "Trequanda", href: "trequanda"},
    locationsData: getProvinceLocationsData({
        links: links.autospurgo,
        comuni: comuni["siena"],
        name: "Siena",
    }),
});
