import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Impruneta",
  canonical: links.servizi["centrifugazione-fanghi"]["impruneta"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Impruneta",
  locationNames: { label: "Impruneta", href: "impruneta" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
