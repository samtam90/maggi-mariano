import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Pratovecchio Stia",
  canonical: links.servizi["centrifugazione-fanghi"]["pratovecchio-stia"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Pratovecchio Stia",
  locationNames: { label: "Pratovecchio Stia", href: "pratovecchio-stia" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
