import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Ortignano Raggiolo",
    canonical: links.autospurgo["ortignano-raggiolo"],
});
export default withBaseProps({ 
    title: "Autospurgo Ortignano Raggiolo", 
    locationNames: {label: "Ortignano Raggiolo", href: "ortignano-raggiolo"},
    locationsData: getProvinceLocationsData({
        links: links.autospurgo,
        comuni: comuni["arezzo"],
        name: "Arezzo",
    }),
});
