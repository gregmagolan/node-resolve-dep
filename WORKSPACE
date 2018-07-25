workspace(name = "node_resolve_dep")

http_archive(
    name = "build_bazel_rules_nodejs",
    url = "https://github.com/bazelbuild/rules_nodejs/archive/20ff5892612f8359aec8aaf26dd3902a24976ada.zip",
    strip_prefix = "rules_nodejs-20ff5892612f8359aec8aaf26dd3902a24976ada",
    sha256 = "07da9d4c3e688a02745d0f50709a87744706d4f5d1959b799b0ac38e97acd622",
)

http_archive(
    name = "build_bazel_rules_typescript",
    url = "https://github.com/bazelbuild/rules_typescript/archive/0.15.3.zip",
    strip_prefix = "rules_typescript-0.15.3",
    sha256 = "a2b26ac3fc13036011196063db1bf7f1eae81334449201dc28087ebfa3708c99",
)

http_archive(
    name = "io_bazel_rules_go",
    url = "https://github.com/bazelbuild/rules_go/releases/download/0.10.3/rules_go-0.10.3.tar.gz",
    sha256 = "feba3278c13cde8d67e341a837f69a029f698d7a27ddbb2a202be7a10b22142a",
)

http_archive(
    name = "io_bazel_rules_webtesting",
    url = "https://github.com/bazelbuild/rules_webtesting/archive/7ffe970bbf380891754487f66c3d680c087d67f2.zip",
    strip_prefix = "rules_webtesting-7ffe970bbf380891754487f66c3d680c087d67f2",
    sha256 = "4fb0dca8c9a90547891b7ef486592775a523330fc4555c88cd8f09270055c2ce",
)

load("@build_bazel_rules_nodejs//:defs.bzl", "node_repositories")

node_repositories(
  package_json = ["//:package.json"],
  preserve_symlinks = True)

load("@build_bazel_rules_typescript//:defs.bzl", "ts_setup_workspace")

ts_setup_workspace()
