import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Fucecchio",
    canonical: links.autospurgo["fucecchio"],
});
export default withBaseProps({ 
    title: "Autospurgo Fucecchio", 
    locationNames: {label: "Fucecchio", href: "fucecchio"},
    locationsData: getProvinceLocationsData({
        links: links.autospurgo,
        comuni: comuni["firenze"],
        name: "Firenze",
    }),
});
