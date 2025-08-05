import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Cesa in valdichiana",
  canonical: links.servizi["centrifugazione-fanghi"]["cesa-in-valdichiana"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Cesa in valdichiana",
  locationNames: { label: "Cesa in valdichiana", href: "cesa-in-valdichiana" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
