import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Poggibonsi",
    canonical: links.autospurgo["poggibonsi"],
});
export default withBaseProps({ 
    title: "Autospurgo Poggibonsi", 
    locationNames: {label: "Poggibonsi", href: "poggibonsi"},
    locationsData: getProvinceLocationsData({
        links: links.autospurgo,
        comuni: comuni["siena"],
        name: "Siena",
    }),
});
