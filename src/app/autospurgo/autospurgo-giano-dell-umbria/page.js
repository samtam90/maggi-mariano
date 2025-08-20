import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Giano dell'Umbria",
    canonical: links.autospurgo["giano-dell-umbria"],
});
export default withBaseProps({ 
    title: "Autospurgo Giano dell'Umbria", 
    locationNames: {label: "Giano dell'Umbria", href: "giano-dell-umbria"},
    locationsData: getProvinceLocationsData({
        links: links.autospurgo,
        comuni: comuni["perugia"],
        name: "Perugia",
    }),
});
