import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Belluno",
  canonical: links.servizi["centrifugazione-fanghi"]["belluno"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Belluno",
  locationNames: { label: "Belluno", href: "belluno" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["belluno"],
      name: "Belluno",
  }),
});
