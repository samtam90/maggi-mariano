import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Buonconvento",
    canonical: links.autospurgo["buonconvento"],
});
export default withBaseProps({ 
    title: "Autospurgo Buonconvento", 
    locationNames: {label: "Buonconvento", href: "buonconvento"},
    locationsData: getProvinceLocationsData({
        links: links.autospurgo,
        comuni: comuni["siena"],
        name: "Siena",
    }),
});
