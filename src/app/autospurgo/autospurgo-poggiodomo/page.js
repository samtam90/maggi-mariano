import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Poggiodomo",
    canonical: links.autospurgo["poggiodomo"],
});
export default withBaseProps({ 
    title: "Autospurgo Poggiodomo", 
    locationNames: {label: "Poggiodomo", href: "poggiodomo"},
    locationsData: getProvinceLocationsData({
        links: links.autospurgo,
        comuni: comuni["perugia"],
        name: "Perugia",
    }),
});
