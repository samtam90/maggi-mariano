import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Cesa in valdichiana",
    canonical: links.autospurgo["cesa-in-valdichiana"],
});
export default withBaseProps({ 
    title: "Autospurgo Cesa in valdichiana", 
    locationNames: {label: "Cesa in valdichiana", href: "cesa-in-valdichiana"},
    locationsData: getProvinceLocationsData({
        links: links.autospurgo,
        comuni: comuni["arezzo"],
        name: "Arezzo",
    }),
});
