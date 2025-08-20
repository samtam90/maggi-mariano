import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Figline Valdarno",
    canonical: links.autospurgo["figline-valdarno"],
});
export default withBaseProps({ 
    title: "Autospurgo Figline Valdarno", 
    locationNames: {label: "Figline Valdarno", href: "figline-valdarno"},
    locationsData: getProvinceLocationsData({
        links: links.autospurgo,
        comuni: comuni["arezzo"],
        name: "Arezzo",
    }),
});
