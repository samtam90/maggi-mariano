import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Montecchio",
    canonical: links.autospurgo["montecchio"],
});
export default withBaseProps({ 
    title: "Autospurgo Montecchio", 
    locationNames: {label: "Montecchio", href: "montecchio"},
    locationsData: getProvinceLocationsData({
        links: links.autospurgo,
        comuni: comuni["terni"],
        name: "Terni",
    }),
});
