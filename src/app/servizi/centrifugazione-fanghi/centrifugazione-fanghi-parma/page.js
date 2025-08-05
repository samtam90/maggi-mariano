import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Parma",
  canonical: links.servizi["centrifugazione-fanghi"]["parma"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Parma",
  locationNames: { label: "Parma", href: "parma" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["parma"],
      name: "Parma",
  }),
});
